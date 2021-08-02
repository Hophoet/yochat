
const profileActionButtons = [
    { id:1, name:'Update personal informations', code:'upi'},
    { id:2, name:'My Orders', code:'mo'},
]

const languages = [
    {id:1, name:'ENGLISH', selected:false},
    {id:4, name:'GERMAN', selected:false},
    {id:5, name:'SPANISH', selected:false},
    {id:6, name:'ARABIC', selected:false},
    {id:7, name:'RUSSIAN', selected:false},
    {id:8, name:'PERSIAN', selected:false},
    {id:9, name:'FRENCH', selected:false},

]
const posts = [
    {
        id:1, 
        text:'Are you angry at something',
        user:{id:3, name:'Lucy Payne', image:require('../assets/images/user.jpeg')}, 
        like:49, 
        comment:45, 
        share:4, 
        image:require('../assets/images/pizza.jpg')
    },
    {
        id:2, 
        user:{id:3, name:'Sophia Gordon', image:require('../assets/images/user.jpeg')}, 
        text:'In the season premiere of OVERHEARD, WE TRAVEL TO OME OF THE WORLD',
        like:49, 
        comment:45, 
        share:4, 
        image:null
    },
    {
        id:3, 
        user:{id:3, name:'Sophia Gordon', image:require('../assets/images/user.jpeg')}, 
        text:'Very fun to quit!',
        like:49, 
        comment:45, 
        share:4, 
        image:null
    },
    {
        id:41, 
        text:'Are you angry at something',
        user:{id:3, name:'Lucy Payne', image:require('../assets/images/user.jpeg')}, 
        like:49, 
        comment:45, 
        share:4, 
        image:require('../assets/images/pizz6.webp')
    },
]

const contacts = [
    {id:1, name:'mix', followed:false,  online:true, image:require('../assets/images/user.jpeg')},
    {id:2, name:'alice', followed:true,  online:false, image:require('../assets/images/user.jpeg')},
    {id:3, name:'ubertine', followed:false,  online:false, image:require('../assets/images/user.jpeg')},
    {id:4, name:'cecilia', followed:true,  online:true, image:require('../assets/images/user.jpeg')},
    {id:5, name:'relse', followed:true,  online:true, image:require('../assets/images/user.jpeg')},
    {id:6, name:'olive', followed:true,  online:true, image:require('../assets/images/user.jpeg')},
    {id:7, name:'burn', followed:true,  online:true, image:require('../assets/images/user.jpeg')},
    {id:8, name:'lelia', followed:true,  online:true, image:require('../assets/images/user.jpeg')},
    {id:99, name:'lini', followed:true,  online:true, image:require('../assets/images/user.jpeg')},
    {id:23, name:'teli', followed:true,  online:true, image:require('../assets/images/user.jpeg')},
    {id:33, name:'sanchez', followed:true,  online:true, image:require('../assets/images/user.jpeg')},
]

const notifications = [
    {id:1, name:'Peter Morgan asked you to like a page', date:'34 min ago', image:require('../assets/images/user.jpeg')},
    {id:3, name:'Cory Will mentioned you in a comment', date:'34 min ago', image:require('../assets/images/user.jpeg')},
    {id:4, name:'Peter Morgan asked you to like a page', date:'34 min ago', image:require('../assets/images/user.jpeg')},
    {id:5, name:'Cory Wills replied to your comment', date:'34 min ago', image:require('../assets/images/user.jpeg')},
]

const chats = [
    {
        id:1, 
        user:{name:'Peter Yan', image:require('../assets/images/user.jpeg')},
        messages:[
            {id:1, text:'the texts', sender:true, date:'23:34'},
            {id:4, image:require('../assets/images/pizz6.webp'), text:'Hello Jimmy', sender:false, date:'23:34'},
            {id:6, text:'Where are you, JIM?', sender:true, date:'23:34'},
            {id:7, text:'the texts', sender:false, date:'23:34'},
        ],
    },
    {
        id:2, 
        user:{name:'Tina Doe', image:require('../assets/images/user.jpeg')},
        messages:[
            {id:1, image:require('../assets/images/pizz6.webp'), text:'the texts', sender:true, date:'23:34'},
        
            {id:2, text:'the texts', sender:false, date:'23:34'},
        ],
    },
    {
        id:3, 
        user:{name:'Gareth Moses', image:require('../assets/images/user.jpeg')},
        messages:[
            {id:1, text:'the texts', sender:false, date:'23:34'},
        ],
    },
]

const groups = [
    {
        id:1, 
        name:'Designers Group',
        messages:[
            {
                id:1, 
                user:{name:'Gareth Moses', image:require('../assets/images/user.jpeg')},
                text:'the texts', 
                image:require('../assets/images/pizz6.webp'),
                sender:false, 
                date:'23:34'
            },
            {
                id:9, 
                user:{name:'me', image:require('../assets/images/user.jpeg')},
                text:'the texts', 
                sender:true, 
                date:'23:34'
            },
            {
                id:2, 
                user:{name:'Handle YUI', image:require('../assets/images/user.jpeg')},
                text:'the texts', 
                sender:false, 
                date:'23:34'
            },
        ],
    },
    {
        id:2, 
        name:'Developers Chat',
        messages:[
            {
                id:1, 
                user:{name:'Gareth Moses', image:require('../assets/images/user.jpeg')},
                text:'the texts', 
                image:require('../assets/images/pizz6.webp'),
                sender:false, 
                date:'23:34'
            },
            {
                id:9, 
                user:{name:'Grinsh', image:require('../assets/images/user.jpeg')},
                text:'the texts', 
                sender:false, 
                date:'23:34'
            },
            {
                id:3, 
                user:{name:'Guistavo', image:require('../assets/images/user.jpeg')},
                text:'the texts', 
                sender:false, 
                date:'23:34'
            },
        ],
    },
    {
        id:4, 
        name:'9GAG Fun Chat',
        messages:[
            {
                id:1, 
                user:{name:'me', image:require('../assets/images/user.jpeg')},
                text:'the texts', 
                sender:true, 
                date:'23:34'
            },
            {
                id:9, 
                user:{name:'Hyei line', image:require('../assets/images/user.jpeg')},
                text:'the texts', 
                sender:false, 
                date:'23:34'
            },
            {
                id:2, 
                user:{name:'Handle YUI', image:require('../assets/images/user.jpeg')},
                text:'the texts', 
                sender:false, 
                date:'23:34'
            },
        ],
    },
]


export {
    profileActionButtons,
    contacts,
    notifications,
    posts,
    chats,
    groups,
    languages
}
