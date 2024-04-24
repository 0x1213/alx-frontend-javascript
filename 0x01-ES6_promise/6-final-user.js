import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    const [user, photo] = await Promise.allSettled([userPromise, photoPromise]);

    return [
      { status: user.status, value: user.value },
      { status: photo.status, value: photo.value },
    ];
  } catch (error) {
    return [{ status: 'rejected', value: error }];
  }
};

export default handleProfileSignup;
