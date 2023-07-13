import { Button } from '~components/Button';
import SvgReactLogo from '~components/svg/svg-react-logo';

function App() {
    return (
        <h1 className='text-3xl font-bold text-violet-700 underline'>
            Hello world!
            <SvgReactLogo fill={'red'} />
            <Button disabled>Button</Button>
        </h1>
    );
}

export default App;
