import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo
} from 'react';
import axios from 'axios';
import {
  axiosReq,
  axiosRes
} from "../api/axios";
import {
  useHistory
} from "react-router";
import {
  removeTokenTimestamp,
  shouldRefreshToken
} from '../utilis/utilis';

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();
export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

/** Will set the current user that is logged in and will refresh tokens so that
 * User will not be logged out every 5 minutes. Code is taken from Codeinstitue.
 */

 export const CurrentUserProvider = ({
  children
}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const handleData = async () => {
    try {

      const {
        data
      } = await axiosRes.get('dj-rest-auth/user/');
      setCurrentUser(data);

    } catch (err) {

    }
  }

  useEffect(() => {
    handleData();

  }, []);

  useMemo(() => {
    axiosReq.interceptors.request.use(
      async (config) => {
          if (shouldRefreshToken()) {
            try {
              await axios.post("/dj-rest-auth/token/refresh/");
            } catch (err) {
              setCurrentUser((prevCurrentUser) => {
                if (prevCurrentUser) {
                  history.push("/signin");
                }
                return null;
              });
              removeTokenTimestamp();
              return config;
            }
          }
          return config;
        },
        (err) => {
          return Promise.reject(err);
        }
    );

    axiosRes.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (err.response?.status === 401) {
          try {
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (err) {
            setCurrentUser((prevCurrentUser) => {
              if (prevCurrentUser) {
                history.push("/signin");
              }
              return null;
            });
            removeTokenTimestamp();
          }
          return axios(err.config);
        }
        return Promise.reject(err);
      }
    );
  }, [history]);

return (
  
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>

  )

};