import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./utils/Auth.jsx";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;

/*

PrivateRoute 컴포넌트는 Route 컴포넌트를 상속받아, 
사용자의 로그인 여부를 검사한 후, 
로그인되어 있지 않은 경우에는 로그인 페이지로 리다이렉트합니다. 

로그인된 경우에는 Component 를 렌더링합니다. 
이렇게 구현하면, 
로그인된 사용자만 접근할 수 있는 페이지에서 PrivateRoute 컴포넌트를 사용할 수 있습니다.

*/