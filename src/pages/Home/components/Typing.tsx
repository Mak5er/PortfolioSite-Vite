import {TypeAnimation} from 'react-type-animation';

const Typing = () => {
    return (
        <TypeAnimation
            sequence={[
                'Beginner FullStack Developer', // Types 'One'
                2000, // Waits 1s
                'Telegram Bots Developer', // Deletes 'One' and types 'Two'
                3000, // Waits 2s
                'Open Source Contributor', // Types 'Three' without deleting 'Two'
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{fontSize: '2em', display: 'inline-block'}}
        />
    );
};

export default Typing;