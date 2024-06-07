import stylesBack from '../styles/Back.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Back = () => {
    const router = useRouter();

  const handleBackClick = (e) => {
    e.preventDefault();
    router.back();
  };
    return (
        <div className = {stylesBack.back}>
            <Image className = {stylesBack.arrow} src = '/backarrow.svg' width = {24} height = {24}></Image>
            <a href = '#' onClick = {handleBackClick} className = {stylesBack.arrowText}>Back</a>
        </div>
    )
}

export default Back;