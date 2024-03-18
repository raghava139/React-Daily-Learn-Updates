import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestingApp from './TestingApps/Testingapp';

Enzyme.configure({ adapter: new Adapter() });

// import { render, screen } from '@testing-library/react';
// import App from './App';

//  test('renders learn react link', () => {
//       const { getByText } = render(<App />);
//       const linkElement = getByText(/learn react/i);
//       expect(linkElement).toBeInTheDocument();
//     });

// describe('raghanvendra',()=>{
//   test('number test 1+2 is 3',function(){
//     expect(2+2).toBe(4)
//   })
// })

describe('TextTesting',()=>{
  // test('first-test-case',()=>{
  //     const wrapper = shallow(<TestingApp/>)
  //      const testWrapper = wrapper.find('div.raghavendra').text();
  //      expect(testWrapper).toBe("Hello React");
  // })

  test('second-test-case',()=>{
    const wrapper = shallow(<TestingApp/>);
    const testWrapping = wrapper.find('button.mybtn');
    testWrapping.simulate('click');
    const myTextIs = wrapper.find('div').text();
    expect(myTextIs).toBe("Hello React count: 1");
})
})