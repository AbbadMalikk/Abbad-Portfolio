import A0 from '../../assets/A0.png'
import A1 from '../../assets/A1.jpg'
import A2 from '../../assets/A2.jpg'
import T0 from '../../assets/T0.jpg'
import T1 from '../../assets/T1.png'
import T2 from '../../assets/T2.png'
import T3 from '../../assets/T3.png'
import T4 from '../../assets/T4.png'
import T5 from '../../assets/T5.gif'
import M0 from '../../assets/M0.png'
import M1 from '../../assets/M1.png'
import M2 from '../../assets/M2.png'
import M3 from '../../assets/M3.png'
import M4 from '../../assets/M4.png'
import M5 from '../../assets/M5.png'
import M6 from '../../assets/M6.png'
import H0 from '../../assets/H0.png'
import H1 from '../../assets/H1.gif'
import H2 from '../../assets/H2.gif'
import H3 from '../../assets/H3.png'
import F0 from '../../assets/F0.png'
import FA1 from '../../assets/FA1.gif'
import FO1 from '../../assets/FO1.gif'
import FC1 from '../../assets/FC1.jpg'
import FR1 from '../../assets/FR1.jpg'
import FR2 from '../../assets/FR2.jpg'
import FR3 from '../../assets/FR3.gif'
import GV1 from '../../assets/GV1.png'
import GV2 from '../../assets/GV2.png'
import GV3 from '../../assets/GV3.gif'
import CP0 from '../../assets/CP0.png'
import CP1 from '../../assets/CP1.png'
import CP2 from '../../assets/CP2.png'
import CP3 from '../../assets/CP3.png'
import CP4 from '../../assets/CP4.png'
import R0 from '../../assets/R0.jpg'
import R1 from '../../assets/R1.jpg'
import R2 from '../../assets/R2.jpg'
import R3 from '../../assets/R3.jpg'
import R4 from '../../assets/R4.gif'

export const projectsData=[
    {
        id:1,
        image:T0,
        title: 'Social Media App',
        category: 'web',
        modalImages: [T1,T2,T3,T4,T5],
        modalDescription: 'A Small Clone of Threads with Functionalities like: Account Creation, Post creation (including Pictures), Likes, Comments, Follows.  Technologies: MERN, ChakraUI'
    },
    {
        id:2,
        image:M0,
        title: 'ERP-system',
        category: 'web',
        modalImages: [M1,M2,M3,M4,M5,M6],
        modalDescription: 'ERP-system (Enterprise Resource Planning)  designed to manage various resources and operations such as client management, orders, invoices, payments, and delivery logistics. Technologies: MERN,Tailwind CSS '
    },
    {
        id:3,
        image:H0,
        title: '3D-Landing Page',
        category: 'web',
        modalImages: [H1,H2,H3],
        modalDescription: 'A Landing Page with a Spline 3D Model. Technologies: Spline, Vite'
    },
    {
        id:4,
        image:F0,
        title: 'Figma Food-Delivery App Design',
        category: 'design',
        modalImages: [FC1,FA1,FO1,FR1,FR2,FR3],
        modalDescription: 'Made Figma Design for UI of a Food-Delivery App Showing UI for different Roles, Owner,Rider,Admin,Customer'
    },
    {
        id:5,
        image:CP0,
        title: 'Coffee Planet - Mobile App Design',
        category: 'design',
        modalImages: [CP1,CP2,CP3,CP4],
        modalDescription: 'Figma Design for a Mobile Application for Coffee Planet showing attractive design.'
    },
    {
        id:6,
        image:GV1,
        title: 'Music Streaming Website - Landing Page',
        category: 'design',
        modalImages: [GV1,GV2,GV3],
        modalDescription: 'Figma Design for Landing Page for GrooveVibes. Implementing Prototyping Skills for Immersive animation.'
    },
    {
        id:7,
        image:R0,
        title: 'Readify - Mobile Application',
        category: 'mobile',
        modalImages: [R1,R2,R3,R4],
        modalDescription: 'READIFY is tailored for small business owners and social media pages to elevate their operations from informal text confirmations to professional invoices. It’s all about building trust, assurance, and a professional connection with customers.'
    },
    {
        id:8,
        image:A0,
        title: 'R3al.AI - Landing Page',
        category: 'design',
        modalImages: [A1,A2],
        modalDescription: 'Figma Design of Landing Page for a Website R3al.AI providing services to people for developing AI Systems.'
    }

]

export const projectsNav=[

    {
        name:'all'
    },
    {
        name:'web'
    },
    {
        name:'design'
    },
    {
        name:'mobile'
    },

]