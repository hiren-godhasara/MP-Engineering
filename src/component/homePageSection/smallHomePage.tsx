'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './smallHomepage.module.scss';
import Image from 'next/image';
import i1 from '../../imageFolder/Mobile/Web Phone-01.webp'
import i2 from '../../imageFolder/Mobile/Web Phone-02.webp'
import i3 from '../../imageFolder/Mobile/Web Phone-03.webp'
import i4 from '../../imageFolder/Mobile/Web Phone-04.webp'
import i5 from '../../imageFolder/Mobile/Web Phone-05.webp'
import vector from '../../imageFolder/111xxxhdpi.png'
import vector1 from '../../imageFolder/Asset 1xxxhdpi.png'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const HomePage1 = () => {
    const router = useRouter();

    const onProdClick = (e: any) => {
        router.push(`/${e}`)
    }
    return (
        <div className={styles.home}>
            <>
                <Swiper
                    centeredSlides={true}
                    speed={1500}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    <SwiperSlide className={styles.mySwiper}>
                        <div onClick={() => { onProdClick("natural-premium-california-almond-200gm") }}>
                            <div className={`${styles.imageWrapper1}`}>
                                <Image
                                    placeholder='blur'
                                    blurDataURL='data:image/webp;base64,UklGRnQFAABXRUJQVlA4WAoAAAAgAAAAmgEAiAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgghgMAABAiAJ0BKpsBiQA+7W6tUT+xKSKoFouT8B2JZ27gRInI8r7C6V7uO1uzqav/JjWhaprAgfQtLEISqQtd5MIXUFU2cHNmhaW9XI/3IHxfx/LQI7DDy6/5XC776COrHn7mdA/3oNjG8KsmZXS/z4Oebdm3mG54Gs5Jak8Q9//+fNdAhYLT407ttksTHnZzu4oBGtGv2fOF/kNS0bB/j7rnaxfoz2/vni2WIwxOoBAAAAAAAAAAokuZt4Ow5T4dfHSSc6oFRSKZ2cIarTLebyFBPMy8ep+uut37BT6E9NMd/vYRPvdLTWuiC6pI7q4/Aw1rFheeWkBkr1TYChyb4ZYB1gKf8zlBTN0kD9mCzaegSF4fGRfKjPWDqkwAAP4V646g/8tYUuUc0Yis9Z+kjc+t4eYhNc030nSRyiZxFxWOU0eAa23r/pK7v/y55J+OKbclIQxQHjzMTppD80v8a1zWFCuDVsjfT6YeP8zgIGQUxZV3eag8v7xFOu073BHPIjoWHjWccHxaD2EQrkNCX8qkjoEk7jha8QLxkbbidI5p0OFQhVvR2x3pezJEgZN2o+7AgzBAHEr8+tH5AKs+g/Kw/bkziDtQEQHGcIeqxEgQO39t0Wdd3HC2SPObtPYMw8vOO9AreO35PVe/C6v6K0iUB/7K8QvOTvGg7ialArKJbIeW/7mTyTivuvtJaOnsHRblisy/u3jAl0dgpnZsEvOPVH2wwjlgTrsykD5mF2BuVp/nkB5AzzaBPwKYhGYcK50z6Rb8mxeEgOt25JcjdXrL4U+IjCfCIXPQ5Z7I61433YGG1zJ6mBe2v9fcewLadT4CyG40XDXg0zxqqW6sMx8iAcG9SoSNdOlQ9lILlXoQh6TQ/8ijZSCURMZI4Vm6bJW7JyXvW+1UTEN7RyNivCIbKfDAd9jxU2ACkxtmnj7Rsfk1gUmd8WuIs7IRlX+zCS7T8hMCZu+p1IXAlnRLdjCsX35vXQJYf+o4Bm2XOoDLktT25YD/fZ2QqEvMAGY8w/f+uGncdtk+A0R7FC5eBE3yTlzg497BPAGwnk1nwlMOnBWpQrAG0b5GdvIOVBaUmdoSoh9JF6I4wgAxwGG0xjR0aAX+NJDu0eJ6IpHgmmvY7kCACScgOPNXrgB1N+S+ZCuH07NoAJRJVJ2WRTg9rsbZJ/XXKcfXqyFwFpsDCyc+14bQdCdAAAAA'
                                    src={i1} alt="Image" style={{ objectFit: "cover" }} priority />
                            </div>
                            <div className={styles.flex}>
                                <Image src={vector} className={styles.leftImage} alt="Almonds" />
                                <h3 className={styles.heada3}>Fresh & Naturally</h3>
                                <Image src={vector1} className={styles.rightImage} alt="Almonds" />
                            </div>
                            <h1 className={styles.heada1}>PREMIUM ALMONDS </h1>
                            <h2 className={styles.heada2}>The Healthy Way to Snack</h2>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.mySwiper}>
                        <div onClick={() => { onProdClick("buy-premium-Whole-Cashew(kaju)-Nuts-200gm") }}>
                            <div className={`${styles.imageWrapper2}`}>
                                <Image
                                    placeholder='blur'
                                    blurDataURL='data:image/webp;base64,UklGRnQFAABXRUJQVlA4WAoAAAAgAAAAmgEAiAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgghgMAABAiAJ0BKpsBiQA+7W6tUT+xKSKoFouT8B2JZ27gRInI8r7C6V7uO1uzqav/JjWhaprAgfQtLEISqQtd5MIXUFU2cHNmhaW9XI/3IHxfx/LQI7DDy6/5XC776COrHn7mdA/3oNjG8KsmZXS/z4Oebdm3mG54Gs5Jak8Q9//+fNdAhYLT407ttksTHnZzu4oBGtGv2fOF/kNS0bB/j7rnaxfoz2/vni2WIwxOoBAAAAAAAAAAokuZt4Ow5T4dfHSSc6oFRSKZ2cIarTLebyFBPMy8ep+uut37BT6E9NMd/vYRPvdLTWuiC6pI7q4/Aw1rFheeWkBkr1TYChyb4ZYB1gKf8zlBTN0kD9mCzaegSF4fGRfKjPWDqkwAAP4V646g/8tYUuUc0Yis9Z+kjc+t4eYhNc030nSRyiZxFxWOU0eAa23r/pK7v/y55J+OKbclIQxQHjzMTppD80v8a1zWFCuDVsjfT6YeP8zgIGQUxZV3eag8v7xFOu073BHPIjoWHjWccHxaD2EQrkNCX8qkjoEk7jha8QLxkbbidI5p0OFQhVvR2x3pezJEgZN2o+7AgzBAHEr8+tH5AKs+g/Kw/bkziDtQEQHGcIeqxEgQO39t0Wdd3HC2SPObtPYMw8vOO9AreO35PVe/C6v6K0iUB/7K8QvOTvGg7ialArKJbIeW/7mTyTivuvtJaOnsHRblisy/u3jAl0dgpnZsEvOPVH2wwjlgTrsykD5mF2BuVp/nkB5AzzaBPwKYhGYcK50z6Rb8mxeEgOt25JcjdXrL4U+IjCfCIXPQ5Z7I61433YGG1zJ6mBe2v9fcewLadT4CyG40XDXg0zxqqW6sMx8iAcG9SoSNdOlQ9lILlXoQh6TQ/8ijZSCURMZI4Vm6bJW7JyXvW+1UTEN7RyNivCIbKfDAd9jxU2ACkxtmnj7Rsfk1gUmd8WuIs7IRlX+zCS7T8hMCZu+p1IXAlnRLdjCsX35vXQJYf+o4Bm2XOoDLktT25YD/fZ2QqEvMAGY8w/f+uGncdtk+A0R7FC5eBE3yTlzg497BPAGwnk1nwlMOnBWpQrAG0b5GdvIOVBaUmdoSoh9JF6I4wgAxwGG0xjR0aAX+NJDu0eJ6IpHgmmvY7kCACScgOPNXrgB1N+S+ZCuH07NoAJRJVJ2WRTg9rsbZJ/XXKcfXqyFwFpsDCyc+14bQdCdAAAAA'
                                    src={i2} alt="Image" style={{ objectFit: "cover" }} className={styles.imageWrapper} priority={true} />
                            </div>

                            <div className={styles.flex}>
                                <Image src={vector} className={styles.leftImage} alt="Almonds" />
                                <h3 className={styles.headp3}>The Natural Snack</h3>
                                <Image src={vector1} className={styles.rightImage} alt="Almonds" />
                            </div>
                            <h1 className={styles.headp1}>PREMIUM </h1>
                            <h2 className={styles.headp2}>CASHEW</h2>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className={styles.mySwiper}>
                        <div onClick={() => { onProdClick("buy-freshly-roasted-salted-pista-200gm") }}>
                            <div className={`${styles.imageWrapper3}`}>
                                <Image
                                    placeholder='blur'
                                    blurDataURL='data:image/webp;base64,UklGRnQFAABXRUJQVlA4WAoAAAAgAAAAmgEAiAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgghgMAABAiAJ0BKpsBiQA+7W6tUT+xKSKoFouT8B2JZ27gRInI8r7C6V7uO1uzqav/JjWhaprAgfQtLEISqQtd5MIXUFU2cHNmhaW9XI/3IHxfx/LQI7DDy6/5XC776COrHn7mdA/3oNjG8KsmZXS/z4Oebdm3mG54Gs5Jak8Q9//+fNdAhYLT407ttksTHnZzu4oBGtGv2fOF/kNS0bB/j7rnaxfoz2/vni2WIwxOoBAAAAAAAAAAokuZt4Ow5T4dfHSSc6oFRSKZ2cIarTLebyFBPMy8ep+uut37BT6E9NMd/vYRPvdLTWuiC6pI7q4/Aw1rFheeWkBkr1TYChyb4ZYB1gKf8zlBTN0kD9mCzaegSF4fGRfKjPWDqkwAAP4V646g/8tYUuUc0Yis9Z+kjc+t4eYhNc030nSRyiZxFxWOU0eAa23r/pK7v/y55J+OKbclIQxQHjzMTppD80v8a1zWFCuDVsjfT6YeP8zgIGQUxZV3eag8v7xFOu073BHPIjoWHjWccHxaD2EQrkNCX8qkjoEk7jha8QLxkbbidI5p0OFQhVvR2x3pezJEgZN2o+7AgzBAHEr8+tH5AKs+g/Kw/bkziDtQEQHGcIeqxEgQO39t0Wdd3HC2SPObtPYMw8vOO9AreO35PVe/C6v6K0iUB/7K8QvOTvGg7ialArKJbIeW/7mTyTivuvtJaOnsHRblisy/u3jAl0dgpnZsEvOPVH2wwjlgTrsykD5mF2BuVp/nkB5AzzaBPwKYhGYcK50z6Rb8mxeEgOt25JcjdXrL4U+IjCfCIXPQ5Z7I61433YGG1zJ6mBe2v9fcewLadT4CyG40XDXg0zxqqW6sMx8iAcG9SoSNdOlQ9lILlXoQh6TQ/8ijZSCURMZI4Vm6bJW7JyXvW+1UTEN7RyNivCIbKfDAd9jxU2ACkxtmnj7Rsfk1gUmd8WuIs7IRlX+zCS7T8hMCZu+p1IXAlnRLdjCsX35vXQJYf+o4Bm2XOoDLktT25YD/fZ2QqEvMAGY8w/f+uGncdtk+A0R7FC5eBE3yTlzg497BPAGwnk1nwlMOnBWpQrAG0b5GdvIOVBaUmdoSoh9JF6I4wgAxwGG0xjR0aAX+NJDu0eJ6IpHgmmvY7kCACScgOPNXrgB1N+S+ZCuH07NoAJRJVJ2WRTg9rsbZJ/XXKcfXqyFwFpsDCyc+14bQdCdAAAAA'
                                    src={i3} alt="Image" style={{ objectFit: "cover" }} className={styles.imageWrapper} priority={true} />

                            </div>

                            <div className={styles.flex}>
                                <Image src={vector} className={styles.leftImage} alt="Almonds" />
                                <h3 className={styles.headp3}>Everyone Loves it</h3>
                                <Image src={vector1} className={styles.rightImage} alt="Almonds" />
                            </div>
                            <h1 className={styles.headp1}>PREMIUM </h1>
                            <h2 className={styles.headp2}>PISTACHIO</h2>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className={styles.mySwiper}>
                        <div onClick={() => { onProdClick("natural-premium-california-almond-fresh-cashew-salted-pista-200gm") }}>
                            <div className={`${styles.imageWrapper4}`}>
                                <Image
                                    placeholder='blur'
                                    blurDataURL='data:image/webp;base64,UklGRnQFAABXRUJQVlA4WAoAAAAgAAAAmgEAiAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgghgMAABAiAJ0BKpsBiQA+7W6tUT+xKSKoFouT8B2JZ27gRInI8r7C6V7uO1uzqav/JjWhaprAgfQtLEISqQtd5MIXUFU2cHNmhaW9XI/3IHxfx/LQI7DDy6/5XC776COrHn7mdA/3oNjG8KsmZXS/z4Oebdm3mG54Gs5Jak8Q9//+fNdAhYLT407ttksTHnZzu4oBGtGv2fOF/kNS0bB/j7rnaxfoz2/vni2WIwxOoBAAAAAAAAAAokuZt4Ow5T4dfHSSc6oFRSKZ2cIarTLebyFBPMy8ep+uut37BT6E9NMd/vYRPvdLTWuiC6pI7q4/Aw1rFheeWkBkr1TYChyb4ZYB1gKf8zlBTN0kD9mCzaegSF4fGRfKjPWDqkwAAP4V646g/8tYUuUc0Yis9Z+kjc+t4eYhNc030nSRyiZxFxWOU0eAa23r/pK7v/y55J+OKbclIQxQHjzMTppD80v8a1zWFCuDVsjfT6YeP8zgIGQUxZV3eag8v7xFOu073BHPIjoWHjWccHxaD2EQrkNCX8qkjoEk7jha8QLxkbbidI5p0OFQhVvR2x3pezJEgZN2o+7AgzBAHEr8+tH5AKs+g/Kw/bkziDtQEQHGcIeqxEgQO39t0Wdd3HC2SPObtPYMw8vOO9AreO35PVe/C6v6K0iUB/7K8QvOTvGg7ialArKJbIeW/7mTyTivuvtJaOnsHRblisy/u3jAl0dgpnZsEvOPVH2wwjlgTrsykD5mF2BuVp/nkB5AzzaBPwKYhGYcK50z6Rb8mxeEgOt25JcjdXrL4U+IjCfCIXPQ5Z7I61433YGG1zJ6mBe2v9fcewLadT4CyG40XDXg0zxqqW6sMx8iAcG9SoSNdOlQ9lILlXoQh6TQ/8ijZSCURMZI4Vm6bJW7JyXvW+1UTEN7RyNivCIbKfDAd9jxU2ACkxtmnj7Rsfk1gUmd8WuIs7IRlX+zCS7T8hMCZu+p1IXAlnRLdjCsX35vXQJYf+o4Bm2XOoDLktT25YD/fZ2QqEvMAGY8w/f+uGncdtk+A0R7FC5eBE3yTlzg497BPAGwnk1nwlMOnBWpQrAG0b5GdvIOVBaUmdoSoh9JF6I4wgAxwGG0xjR0aAX+NJDu0eJ6IpHgmmvY7kCACScgOPNXrgB1N+S+ZCuH07NoAJRJVJ2WRTg9rsbZJ/XXKcfXqyFwFpsDCyc+14bQdCdAAAAA'
                                    src={i4} alt="Image" style={{ objectFit: "cover" }} className={styles.imageWrapper} priority={true} />

                            </div>

                            <h3 className={styles.headcombo1}> Premium </h3>

                            <h1 className={styles.headcombo2}>Dry Fruit Combos Are</h1>
                            <h2 className={styles.headcombo3}>Available.....</h2>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className={styles.mySwiper}>
                        <Link href='/contactUs'>
                            <div className={`${styles.imageWrapper5}`}>
                                <Image
                                    placeholder='blur'
                                    blurDataURL='data:image/webp;base64,UklGRnQFAABXRUJQVlA4WAoAAAAgAAAAmgEAiAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgghgMAABAiAJ0BKpsBiQA+7W6tUT+xKSKoFouT8B2JZ27gRInI8r7C6V7uO1uzqav/JjWhaprAgfQtLEISqQtd5MIXUFU2cHNmhaW9XI/3IHxfx/LQI7DDy6/5XC776COrHn7mdA/3oNjG8KsmZXS/z4Oebdm3mG54Gs5Jak8Q9//+fNdAhYLT407ttksTHnZzu4oBGtGv2fOF/kNS0bB/j7rnaxfoz2/vni2WIwxOoBAAAAAAAAAAokuZt4Ow5T4dfHSSc6oFRSKZ2cIarTLebyFBPMy8ep+uut37BT6E9NMd/vYRPvdLTWuiC6pI7q4/Aw1rFheeWkBkr1TYChyb4ZYB1gKf8zlBTN0kD9mCzaegSF4fGRfKjPWDqkwAAP4V646g/8tYUuUc0Yis9Z+kjc+t4eYhNc030nSRyiZxFxWOU0eAa23r/pK7v/y55J+OKbclIQxQHjzMTppD80v8a1zWFCuDVsjfT6YeP8zgIGQUxZV3eag8v7xFOu073BHPIjoWHjWccHxaD2EQrkNCX8qkjoEk7jha8QLxkbbidI5p0OFQhVvR2x3pezJEgZN2o+7AgzBAHEr8+tH5AKs+g/Kw/bkziDtQEQHGcIeqxEgQO39t0Wdd3HC2SPObtPYMw8vOO9AreO35PVe/C6v6K0iUB/7K8QvOTvGg7ialArKJbIeW/7mTyTivuvtJaOnsHRblisy/u3jAl0dgpnZsEvOPVH2wwjlgTrsykD5mF2BuVp/nkB5AzzaBPwKYhGYcK50z6Rb8mxeEgOt25JcjdXrL4U+IjCfCIXPQ5Z7I61433YGG1zJ6mBe2v9fcewLadT4CyG40XDXg0zxqqW6sMx8iAcG9SoSNdOlQ9lILlXoQh6TQ/8ijZSCURMZI4Vm6bJW7JyXvW+1UTEN7RyNivCIbKfDAd9jxU2ACkxtmnj7Rsfk1gUmd8WuIs7IRlX+zCS7T8hMCZu+p1IXAlnRLdjCsX35vXQJYf+o4Bm2XOoDLktT25YD/fZ2QqEvMAGY8w/f+uGncdtk+A0R7FC5eBE3yTlzg497BPAGwnk1nwlMOnBWpQrAG0b5GdvIOVBaUmdoSoh9JF6I4wgAxwGG0xjR0aAX+NJDu0eJ6IpHgmmvY7kCACScgOPNXrgB1N+S+ZCuH07NoAJRJVJ2WRTg9rsbZJ/XXKcfXqyFwFpsDCyc+14bQdCdAAAAA'
                                    src={i5} alt="Image" style={{ objectFit: "cover" }} className={styles.imageWrapper} priority={true} />
                            </div>
                            <h3 className={styles.headdetails1}>The Finest Dryfruits</h3>
                            <hr className={styles.hr} />
                            <h1 className={styles.headdetails2}>Eat healthy,Live well!</h1>
                            <h2 className={styles.headdetails3}>Packed with good fats,micronutrients and antioxidants,our premium quality dry fruits make an excellent snack and are perfect festival gifts.</h2>
                            <button className={styles.btndetails1}>Contact Us</button>
                        </Link>
                    </SwiperSlide>




                </Swiper>

            </>
            {/* ) } */}

        </div>
    );
};

export default HomePage1;
