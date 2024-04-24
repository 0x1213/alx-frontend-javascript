import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    const uploadPhotoRes = await uploadPhoto();
    const createUserRes = await createUser();
    return { photo: uploadPhotoRes, user: createUserRes };
  } catch (error) {
    return { photo: null, user: null };
  }
};
export default asyncUploadUser;
