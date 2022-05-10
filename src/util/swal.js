import swal from 'sweetalert';
import { history } from '../App';

export const message = (text, type) => {
    return swal({
        title: "Message",
        text: text,
        icon: type,
        button: "OK",
    })
}