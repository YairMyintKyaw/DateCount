import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { DateTime } from "luxon";
import { useEffect, useState } from 'react';
import ImgScroll from "../../assets/img/img_scroll.jpg"

const Lp = () => {
    const startDate = DateTime.fromISO("2023-08-15")
    const now = DateTime.now();
    const totalDays = now.diff(startDate, "days").toObject(); 
    const [time, setTime] = useState(now.diff(startDate, ["years", 'months', 'days', "hours", "minutes", "seconds"]).toObject());
    const { years, months, days, hours, minutes, seconds } = time
    console.log(totalDays);
    
    useEffect(() => {
        const updateTime = setInterval(() => {
            const updatedNow = DateTime.now();
            const updatedTime = updatedNow.diff(startDate, ["years", 'months', 'days', "hours", "minutes", "seconds"]).toObject();
            setTime(updatedTime)
        }, 1000)

        return () => clearInterval(updateTime);
    }, [])
    useGSAP(() => {
        gsap.to(".img-scroll", {
            xPercent: -100, duration: 55, ease: "none", repeat: -1
        })
        gsap.to(".names", {
            xPercent: -100, duration: 150, ease: "none", repeat: -1
        })
        const tl = gsap.timeline({
            repeat:-1
        })
        tl.to(".texts span",{
            y: 0
        }).to(".texts span",{
            y: -28, delay:2
        }).to(".texts span",{
            y: -56, delay:2
        }).to(".texts span",{
            y: -84, delay:2
        })
    }, {})

    return (
        <div className='w-full max-h-screen h-screen flex flex-col bg-slate-50'>
            <div className="flex-1 flex flex-col justify-center items-center gap-1 w-fit mx-auto">
                <p className='text-lg text-start w-full font-myanmar font-semibold'>နန်း</p>
                <p className='text-3xl font-semibold'>
                    {years ? years > 0 && <>
                        <span>{(years - 10 >= 0) ? years : "0" + years}</span>
                        <span>{years > 1 ? "Years" : "Year"}</span>
                    </>:""}
                    <span>{(months && months - 10 >= 0) ? months : "0" + months} </span>
                    <span>{months && months > 1 ? "Months" : "Month"} : </span>
                    <span>{(days && days - 10 >= 0) ? days : "0" + days} </span>
                    <span>{days && days > 1 ? "Days" : "Day"} : </span>
                    <span>{(hours && hours - 10 >= 0) ? hours : "0" + hours} </span>
                    <span>{hours && hours > 1 ? "Hours" : "Hour"} : </span>
                    <span>{(minutes && minutes - 10 >= 0) ? minutes : "0" + minutes} </span>
                    <span>{minutes && minutes > 1 ? "Minutes" : "Minute"} : </span>
                    <span>{(seconds && seconds - 10 >= 0) ? Math.floor(seconds) : "0" + (seconds && Math.floor(seconds))} </span>
                    <span>{seconds&&(Math.floor(seconds)) > 1 ? "Seconds" : "Second"}</span>
                </p>
                <div className=' w-full flex justify-between'>
                    <div className=''>
                        {typeof totalDays.days == "number" && Math.floor(totalDays?.days)} days
                    </div>
                    <div className='texts text-lg text-end font-myanmar flex flex-col overflow-hidden font-semibold h-[29px]'>
                        <span>ချစ်တယ်</span>
                        <span>မြတ်နိုးတယ်</span>
                        <span>အတူရှိချင်တယ်</span>
                        <span>ချစ်တယ်</span>
                        <span>မြတ်နိုးတယ်</span>
                        <span>အတူရှိချင်တယ်</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full '>
                <div className='flex-1 flex overflow-hidden'>
                    <p className='names font-bold flex flex-nowrap'>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                    </p>
                    <p className='names font-bold flex flex-nowrap'>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                        <span className='whitespace-nowrap'>❤️ Nang Kyi Phyu Khin ❤️ Ye Myint Kyaw</span>
                    </p>
                </div>
                <div className='flex overflow-hidden'>
                    <figure className='img-scroll min-w-[100%] h-auto aspect-[1280/280]'>
                        <img src={ImgScroll} className='h-full w-full object-contain object-' width={1280} height={280} loading='eager' alt="" />
                    </figure>
                    <figure className='img-scroll min-w-[100%] h-auto aspect-[1280/280]'>
                        <img src={ImgScroll} className='h-full w-full object-contain object-' width={1280} height={280} loading='eager' alt="" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Lp