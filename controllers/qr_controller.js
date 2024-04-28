const qrService = require('../services/qr_service');


async function createQr(req,res){
    try{
        const qrData=req.body;
        const qr= await qrService.createQr(qrData);
        res.status(200).json({ message: 'Qr created successfully!', qr });
    }
    catch(err){
        res.status(err.status || 500).json({ message: err.message });
    }
}
async function fetchQr(req, res) {
    try {
        console.log(req.query.qrId);
        const qr = await qrService.fetchEventQr(req.query.qrId);
        
    console.log('qr fetched successfully');
        res.status(200).json({ message: 'qr fetched successfully', qr: qr});
    } catch (err) {
      console.error('Error fetching qr:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
module.exports={
    createQr,
    fetchQr
}
