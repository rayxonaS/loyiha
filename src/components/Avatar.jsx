function Avatar({ user }) {
  return (
    <div>
      <div className="avatar">
        <div className="w-18 rounded-full">
          <img src={user.photoURL} />
        </div>
      </div>
      <h2 className="mt-3 text-gray-800 font-semibold mb-5">
        Salut, {user.displayName}
      </h2>
    </div>
  );
}

export default Avatar;
