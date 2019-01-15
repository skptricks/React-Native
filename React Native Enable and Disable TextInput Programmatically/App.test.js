import React from "react";
import App from "./App";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<View
  style={
    Object {
      "flex": 1,
    }
  }
>
  <View
    style={
      Object {
        "marginTop": 150,
      }
    }
  >
    <Text
      accessible={true}
      allowFontScaling={true}
      ellipsizeMode="tail"
      style={
        Object {
          "fontSize": 20,
          "fontWeight": "bold",
          "margin": 10,
          "textAlign": "center",
        }
      }
    >
       Screen width : 
      
    </Text>
    <Text
      accessible={true}
      allowFontScaling={true}
      ellipsizeMode="tail"
      style={
        Object {
          "fontSize": 20,
          "fontWeight": "bold",
          "margin": 10,
          "textAlign": "center",
        }
      }
    >
        Screen height : 
      
    </Text>
  </View>
  <View
    style={
      Object {
        "alignItems": "center",
        "flex": 1,
        "justifyContent": "center",
      }
    }
  >
    <View
      style={
        Array [
          Object {
            "margin": 10,
            "width": "40%",
          },
        ]
      }
    >
      <View
        accessibilityComponentType="button"
        accessibilityTraits={
          Array [
            "button",
          ]
        }
        accessible={true}
        isTVSelectable={true}
        onResponderGrant={[Function]}
        onResponderMove={[Function]}
        onResponderRelease={[Function]}
        onResponderTerminate={[Function]}
        onResponderTerminationRequest={[Function]}
        onStartShouldSetResponder={[Function]}
        style={
          Object {
            "opacity": 1,
          }
        }
      >
        <View
          style={
            Array [
              Object {},
            ]
          }
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            ellipsizeMode="tail"
            style={
              Array [
                Object {
                  "color": "#007AFF",
                  "fontSize": 18,
                  "padding": 8,
                  "textAlign": "center",
                },
              ]
            }
          >
            Get screen size
          </Text>
        </View>
      </View>
    </View>
  </View>
</View>
`);
});
