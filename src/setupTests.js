import '@testing-library/jest-dom/extend-expect';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const adapter = new Adapter();

Enzyme.configure({ adapter })

