import {TypeAnimation} from 'react-type-animation';

const Typing = () => {
    return (
        <TypeAnimation
            sequence={[
                'Beginner FullStack Developer',
                2000,
                'Telegram Bots Developer',
                3000,
                'Open Source Contributor',
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{fontSize: '2em', display: 'inline-block'}}
        />
    );
};

export default Typing;