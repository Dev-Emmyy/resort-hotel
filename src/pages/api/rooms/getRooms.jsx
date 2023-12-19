export default async (req, res) => {
    console.log('Request to /api/rooms/routes received');
    res.status(200).json({ message: 'Hello from the API!' });
  };
  