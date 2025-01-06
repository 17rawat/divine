const AuthoredData = ({ authorData }) => {
  return (
    <div>
      {authorData && (
        <div className="shadow-md rounded-lg p-4 text-gray-800">
          <p className="text-lg text-gray-800 mb-2">{authorData.description}</p>
          <p className="text-gray-500">Authored in {authorData.language}</p>
        </div>
      )}
    </div>
  );
};

export default AuthoredData;
