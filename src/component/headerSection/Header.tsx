'use client'
import headerCompanyLogo from '../../imageFolder/logo.png';
import styles from './Header.module.scss';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import { Drawer } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';
import Loader from '../loader/Loader';

const Header = () => {

    const [apiCalled, setApiCalled] = useState(false);
    const cartButtonRef = useRef<HTMLButtonElement>(null);
    const [auth, setAuth] = useState(false)
    const [mobileView, setMobileView] = useState(0)
    const [searchValue, setSearchValue] = useState("")
    const [products, setProducts] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [isMenuShown, setIsMenuShown] = useState(false)
    const [productDetails, setProductDetails] = useState('');
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
    const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false);
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);
    const router = useRouter()
    const path = usePathname()


    const _user: any = typeof window !== 'undefined' ? localStorage.getItem('userData') : '';
    const userDetails = _user ? JSON.parse(_user) : null;
    const _userName = userDetails ? userDetails.firstName + ' ' + userDetails.lastName : "User Details"

    useEffect(() => {
        const hasApiBeenCalled = parseInt(sessionStorage.getItem('apiCalled') || '0');
        if (!hasApiBeenCalled || (Date.now() - hasApiBeenCalled) > (1 * 60 * 60 * 1000)) {
     
            sessionStorage.setItem('apiCalled', Date.now().toString());
            setApiCalled(true);
        }
    }, []);

    let locationDetails: any = {}





    const handleDocumentClick = (event: any) => {
        if (cartButtonRef.current && !cartButtonRef.current.contains(event.target)) {
            setIsCartDropdownOpen(false);
        }
    };

    const handleCartButtonClickMobile = () => {
        setMobileView(mobileView === 0 ? 1 : 0);
    }

    const handleCartButtonClick = () => {
        setIsCartDropdownOpen(!isCartDropdownOpen);
    }
    const openUserDetailsModal = () => {
        setIsUserDetailsModalOpen(true);
        setMobileView(0);

    };
    const handleDrawerOpen = () => {
        setIsMenuShown(true)
    }
    const closeUserDetailsModal = () => {
        setIsUserDetailsModalOpen(false);
    };
    const orderListClick = () => {
        setMobileView(0);
        router.push('/orderList')
    }
    const onLogoutBtn = () => {
        
    }


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsHeaderSticky(scrollY > window.innerHeight * 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleGoToCart = () => {
        router.push('/cart')
    }

    const [searchDropdown, setSearchDropdown] = useState(false)
    const onOpenSearchbar = () => {
        setSearchDropdown(true)
        if (products?.length === 0) {
            prodData()
        }
    }

    const handleInputChange = (e: any) => {
        setSearchValue(e.target.value);
    };

    const clear = () => {
        setSearchValue("");
    }
    const close = () => {
        setSearchDropdown(false)
    }

    const prodData = async () => {
        setLoading(true)
        fetch(`${process.env.BASE_URL}/s/productList`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data.data.productData);
                setLoading(false)
            })
            .catch(error => {
                console.error('There was Link problem fetching the data:', error);
            })
    };
    const filteredProducts = products.filter((product: any) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const dropdownRef = useRef<any>(null);
    const searchBarRef = useRef<any>(null);

    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            if (
                dropdownRef.current &&
                searchBarRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !searchBarRef.current.contains(event.target)
            ) {
                setSearchDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const highlightSearchTerm = (text: any, term: any) => {
        const regex = new RegExp(`(${term})`, 'gi');
        return text.split(regex).map((part: any, index: any) => (
            part.toLowerCase() === term.toLowerCase()
                ? <span key={index} className={styles.highlight}>{part}</span>
                : part
        ));
    };

    const onbtn = () => {
        const location = window.location.href;
        if (!location.endsWith("/login") && !location.endsWith("/registration")) {
            localStorage.setItem("location", location);
        }
        setIsMenuShown(false)
    }
    const onbtn1 = () => {
        const location = window.location.href;
        if (!location.endsWith("/login") && !location.endsWith("/registration")) {
            localStorage.setItem("location", location);
        }
    }

    return (
        <div className={styles.mainHeaderWrapper}>
            <div className={`${styles.headerContainer} maxScreenWidth`}>
                
                <div className={styles.subContainer}>
                    <p>JINESH</p>
                    <p>VACHHANI</p>
                    <p>JINESH</p>
                    <p>VACHHANI</p>
                </div>
                
                </div>










            <div className={styles.header}>






<div className={styles.mediumScreenHeaderarea}>
                    <div style={{ cursor: 'pointer' }} onClick={() => handleDrawerOpen()}>
                        <svg style={{ marginLeft: '10px' }} height={30} width={25} viewBox="0 0 22 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 7L1 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 13L1 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 1L1 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
  <div className={styles.mediumScreenSectionOne} >
                            <Image src={headerCompanyLogo} width={200} height={200} alt='Home Pagea' className={styles.image} />
                        </div>
                       
                </div>







                {isMenuShown &&
                    <Drawer
                        className={styles.drawer}
                        open={isMenuShown}
                        closable={false}
                        width={200}
                        placement='left'
                        onClose={() => setIsMenuShown(false)}
                        title={
                            <div style={{ direction: 'rtl', cursor: 'pointer' }}>
                                <div className={styles.drawer1} onClick={() => setIsMenuShown(false)}>
                                    <svg style={{ marginLeft: '10px' }} width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.64341 6.99901L13.6552 1.99813C13.8747 1.77862 13.998 1.48091 13.998 1.17048C13.998 0.860046 13.8747 0.562331 13.6552 0.342824C13.4358 0.123318 13.1381 0 12.8277 0C12.5173 0 12.2196 0.123318 12.0002 0.342824L7 5.35536L1.99983 0.342824C1.78036 0.123318 1.48268 -2.31288e-09 1.1723 0C0.861913 2.31288e-09 0.56424 0.123318 0.344765 0.342824C0.125289 0.562331 0.00198911 0.860046 0.00198911 1.17048C0.00198911 1.48091 0.125289 1.77862 0.344765 1.99813L5.35659 6.99901L0.344765 11.9999C0.235521 12.1083 0.148811 12.2372 0.0896384 12.3792C0.0304655 12.5213 0 12.6736 0 12.8275C0 12.9814 0.0304655 13.1338 0.0896384 13.2758C0.148811 13.4179 0.235521 13.5468 0.344765 13.6552C0.453117 13.7644 0.582027 13.8512 0.724059 13.9103C0.866091 13.9695 1.01843 14 1.1723 14C1.32616 14 1.47851 13.9695 1.62054 13.9103C1.76257 13.8512 1.89148 13.7644 1.99983 13.6552L7 8.64265L12.0002 13.6552C12.1085 13.7644 12.2374 13.8512 12.3795 13.9103C12.5215 13.9695 12.6738 14 12.8277 14C12.9816 14 13.1339 13.9695 13.2759 13.9103C13.418 13.8512 13.5469 13.7644 13.6552 13.6552C13.7645 13.5468 13.8512 13.4179 13.9104 13.2758C13.9695 13.1338 14 12.9814 14 12.8275C14 12.6736 13.9695 12.5213 13.9104 12.3792C13.8512 12.2372 13.7645 12.1083 13.6552 11.9999L8.64341 6.99901Z" fill={'#000000'} />
                                    </svg>
                                    <Link href={'/'} className={styles.drawerMain2}>
                                        <Image src={headerCompanyLogo} width={240} height={170} alt='Home Pagea' className={styles.img} />
                                    </Link>
                                </div>
                            </div>
                        }>
                        <div className={styles.antDrawerBody}>
                            <ul className={styles.drawerMenuItems}>
                                <li><Link className={styles.drawerLink} onClick={() => setIsMenuShown(false)} href="/">Home</Link></li>
                                <li><Link className={styles.drawerLink} onClick={() => setIsMenuShown(false)} href="/#products">Products</Link></li>
                                <li><Link className={styles.drawerLink} onClick={() => setIsMenuShown(false)} href="/#gifting">Combo</Link></li>
                                <li><Link className={styles.drawerLink} onClick={() => setIsMenuShown(false)} href="/aboutUs">About Us</Link></li>
                                <li><Link className={styles.drawerLink} onClick={() => setIsMenuShown(false)} href="/contactUs">Contact Us</Link></li>
                                <li><Link className={styles.drawerLink} onClick={() => setIsMenuShown(false)} href="/returnPolicy"> Return Policy</Link></li>
                                <li><Link className={styles.drawerLink} onClick={() => setIsMenuShown(false)} href="/privacyPolicy">Privacy Policy</Link></li>
                                <li><Link className={styles.drawerLink} onClick={() => setIsMenuShown(false)} href="/shippingPolicy">Shipping Policy</Link></li>
                                <li><Link className={styles.drawerLink} onClick={() => setIsMenuShown(false)} href="/termsOfUse">Terms & Conditions</Link></li>
                            </ul>
                        </div>

                    </Drawer>
                } 

                <div className={`${styles.fullScreenHeader} maxScreenWidth`}>
                    <Link href={'/'} >
                        <div className={styles.leftSection}>
                            <Image src={headerCompanyLogo} width={240} height={170} alt='Home Pagea' />
                        </div>
                    </Link>
                    <div className={styles.headerLinkWrapper}>
                        <Link className={styles.headerLink} onClick={() => setIsMenuShown(false)} href="/">Home</Link>
                        <Link className={styles.headerLink} onClick={() => setIsMenuShown(false)} href="/#products">Products</Link>
                        <Link className={styles.headerLink} onClick={() => setIsMenuShown(false)} href="/#gifting">Combo</Link>
                        <Link className={styles.headerLink} onClick={() => setIsMenuShown(false)} href="/aboutUs">About Us</Link>
                        <Link className={styles.headerLink} onClick={() => setIsMenuShown(false)} href="/contactUs">Contact Us</Link>
                    </div>
                    
                    
                </div>


              
            </div>
        </div >
    )
}

export default Header;

