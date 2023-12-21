export default async (req, res) => {
    console.log('Damn is dis real?');
    res.status(200).json({ message: 'Hello from the API!' });
  };
  