import * as yup from 'yup';

export const postSchema = yup.object().shape({
	body: yup.string(),
	image: yup.mixed().required('You must select an image')
});