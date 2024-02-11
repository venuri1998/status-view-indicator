# status-view-indicator

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)]()
![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS%20%7C%20Web-brightgreen.svg?style=for-the-badge&colorB=191A17)

status-view-indicator enables developers to easily implement customizable status indicators similar to those in messaging apps like WhatsApp with react-native.

## Demo 
---

## Prerequisites

⚠️ Peer Dependencies

* [react-native-svg](https://www.npmjs.com/package/react-native-svg#installation)

To create the status indicator, the component relies on `react-native-svg` as a peer dependency.
-Instructions to install and link  => [react-native-svg](https://www.npmjs.com/package/react-native-svg#installation)




## Installation

```sh
npm install status-view-indicator
```

or

```sh
yarn add status-view-indicator
```

## Example
```jsx
import { Dimensions } from 'react-native';
import { StatusViewIndicator } from 'status-view-indicator';

const win = Dimensions.get('window');

....

<StatusViewIndicator 
   storyCount={5} 
   viewCount={3} 
   windowWidth={win.width}
>
    <Image
        resizeMode="cover"
        source={{ uri: 'https://via.placeholder.com/200' }}
        style={{ width: '100%', height: '100%', borderRadius: 100 }}
    />
</StatusViewIndicator>

```

## Props

| Prop                      | Description                                                                           | Type                          | Default Value       | Required |
|:-------------------------:|:--------------------------------------------------------------------------------------|:-----------------------------:|:-------------------:|:--------:|
| storyCount                | total number of segements indicator circle will have                                  | Number                        | 0                   | true     |
| viewCount                 | indicates the number of views                        				    | Number                        | 0                   | true     |
| windowWidth               | represents the width of the device's window                                           | Number                        | 0                   | true     |
| children                  | any react element                                                                     | React Element                 | null                | true     |
| activeStrokeColor         | unviewed circle stroke segment color                                                  | String                        | '#FB473C'           | false    |
| inActiveStrokeColor       | viewed circle stroke segment color                                                    | String                        | '#CCCCCC'           | false    |

                  
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
