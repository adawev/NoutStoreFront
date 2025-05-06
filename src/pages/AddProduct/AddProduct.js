import {useForm} from "react-hook-form";
import {Box, Rating} from '@mui/material';
import {useState} from "react";
import StarIcon from '@mui/icons-material/Star';
import {connect} from "react-redux";
import {saveProduct} from "../../store/reducers/products";

function AddProduct({saveProduct}){
    const { handleSubmit, reset, register} = useForm();
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);

    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };
    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("photo", data.photo[0]);
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("rating", value);

        try {
            await saveProduct(formData); // redux thunk promise return qiladi deb faraz qilamiz
            reset(); // faqat agar dispatch muvaffaqiyatli bo‘lsa
        } catch (e) {
            console.error("Saqlashda xatolik", e);
        }
    };
    return <div className="addProductPage" style={{width:'50%', margin: 'auto'}}>
        
        <form id={'addProductForm'} onSubmit={handleSubmit(onSubmit)} className={'form-control'}>
            <label htmlFor="photo">Photo</label>
            <input type={"file"} id={'photo'} {...register('photo')} className={'form-control'} />

            <label htmlFor="name">Name</label>
            <input type="text" id={'name'} {...register('name')}  className={'form-control'}/>
            <label htmlFor="description">Description</label>
            <input type="text" id={'description'} {...register('description')}  className={'form-control'}/>
            <label htmlFor="rating">Rating</label>
            <br/>
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                id={'rating'}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    setValue(newValue);

                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <br/>
            <label htmlFor="price">Price</label>
            <input type="text" id={'price'} {...register('price')} className={'form-control'} />

            <button className={'btn btn-success'} type={"submit"} form={'addProductForm'} style={{width: "100%", margin: '10px auto'}}>Save</button>
        </form>
    </div>
}
export default connect(null, {saveProduct})(AddProduct);