
        import React from 'react';
        import { Route, Redirect } from 'react-router-dom';
        import { PublicRouterLayout , PrivateRouterLayout} from './routerLayout'
       
        import Auth from './Auth'

        export const PrivateRoute =props  => {

        console.log(Auth.getToken,Auth.getAuth)


        const { component: Component, ...rest } = props
        if (!Component) return null;

        return( <Route
        {...rest}
        render={routeRenderProps =>
        Auth.getToken() 
         ? (
           <PrivateRouterLayout>
               <Component {...routeRenderProps} />
           </PrivateRouterLayout>
        ) : (
        <Redirect
        to={{
        pathname: "/login",state: { from: routeRenderProps.location }
        }}
        />
        )
        }
        />
       )
    };
    export const PublicRoute =props  => {
        const { component: Component, ...rest } = props

       return( <Route
            {...rest}
            render={routeRenderProps =>
            ! Auth.getToken() 
            ? (
                <PublicRouterLayout>
                    <Component {...routeRenderProps} />
                 </PublicRouterLayout>
            ) : (
            <Redirect
            to={{
            pathname: "/",
            state: { from: routeRenderProps.location }

            }}
            />
            )
            }
            />
            );
        }




