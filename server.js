const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');
const axios = require('axios').default;
const fs = require('fs');
const FormData = require('form-data');
const app = express();

const PORT = process.env.PORT || 3001;
const POSTMARK_TOKEN = process.env.POSTMARK_TOKEN;

const threeAdminToken = '2e113be6-bbfb-48c6-998a-7efa10593f29';
const orgId = '62e2af29-9c24-48f3-ad7b-ddac67694a2a';
const envUrl = 'https://preview.threekit.com';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());

app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.status(200).send({ message: 'server healthy!' });
});

app.post('/api/email', async (req, res) => {
  const data = req.body;
  const response = await axios.post(
    'https://api.postmarkapp.com/email/withTemplate/',
    data,
    {
      headers: { 'X-Postmark-Server-Token': POSTMARK_TOKEN },
    }
  );
  if (response.status !== 200)
    res.status(500).json({ message: 'error connecting to postmark' });
  res.status(200).send(response.data);
});

app.get('/api/safeImage', function (req, res) {
  const url = req.query.url;
  const name = url.split('/')[url.split('/').length - 1];

  fetch(url)
    .then((data) => {
      return data.arrayBuffer();
    })
    .then((buffer) => {
      const fileName = name;

      const abc = new File([buffer], fileName, { type: 'image' });
      const formData = new FormData();
      formData.set('files', abc, fileName);

      const requestOptions = {
        method: 'POST',
        body: formData,
        headers: {
          authorization: `Bearer ${threeAdminToken}`,
        },
      };

      fetch(
        `${envUrl}/api/catalog/assets/upload?orgId=${orgId}`,

        requestOptions
      )
        .then((resp) => resp.json())
        .then((data) => {
          const id = data[0].jobId;
          loadAssetId({ status: 'pending', data });

          function loadAssetId({ status, data }) {
            if (status === 'pending') {
              const jobRequestOptions = {
                method: 'GET',
                headers: {
                  authorization: `Bearer ${threeAdminToken}`,
                },
              };

              fetch(
                `${envUrl}/api/catalog/jobs/${id}?orgId=${orgId}`,
                jobRequestOptions
              )
                .then((resp) => resp.json())
                .then((data) => {
                  // do stuff with files and body
                  if (status === 'pending') {
                    setTimeout(() => {
                      loadAssetId({ status: data.job.status, data });
                    }, 300);
                  } else {
                    loadAssetId({ status: data.job.status, data });
                  }
                });
            } else if (status === 'stopped' && data) {
              return res.json({ status: 'OK', result: data });
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
});

async function loadAssetId({ status, jobId }) {
  return new Promise(async (resolve, reject) => {
    try {
      const threeAdminToken = '2e113be6-bbfb-48c6-998a-7efa10593f29';
      const orgId = '62e2af29-9c24-48f3-ad7b-ddac67694a2a';
      const envUrl = 'https://preview.threekit.com';

      const checkStatus = async () => {
        const jobRequestOptions = {
          method: 'GET',
          url: `${envUrl}/api/catalog/jobs/${jobId}?orgId=${orgId}&bearer_token=${threeAdminToken}`,
        };

        const response = await axios(jobRequestOptions);
        const data = response.data;

        if (data.job.status === 'stopped') {
          resolve(data); // Promise is resolved
        } else if (data.job.status === 'pending') {
          setTimeout(checkStatus, 300); // Check again after 300ms
        } else {
          reject(new Error('Unknown status')); // Promise is rejected
        }
      };

      checkStatus();
    } catch (error) {
      reject(error); // Promise is rejected
    }
  });
}

app.post('/api/loadFile', upload.single('files'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const filePath = req.file.path; // Путь к загруженному файлу
    const fileName = req.file.filename;

    const formData = new FormData();
    formData.append('files', fs.createReadStream(filePath), fileName);

    const requestOptions = {
      method: 'POST',
      headers: {
        ...formData.getHeaders(),
        Authorization: `Bearer ${threeAdminToken}`,
      },
      data: formData,
      url: `${envUrl}/api/catalog/assets/upload?orgId=${orgId}`,
    };

    const response = await axios(requestOptions);
    const data = response.data;
    console.log('data', data);
    const jobId = data[0].jobId;
    console.log('jobId:', jobId);

    const result = await loadAssetId({ status: 'pending', jobId });

    return res.status(200).json({
      message: 'File uploaded and processed successfully',
      result: result,
    });
  } catch (error) {
    console.error(error);
  }
  return res.status(200).json({
    message: 'File uploaded successfully',
    fileName: req.file.filename,
  });
});

// Create uploads directory if not exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

app.use(express.static(path.join(__dirname, 'build')));
app.use('/images', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('listening on port: ', PORT));
