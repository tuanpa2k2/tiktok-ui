import { Fragment, useEffect, useMemo, useState } from 'react'; // Là thẻ chứa và nó ko sinh ra Component thật trong DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export const useElementOnScreen = (options, targetRef) => {
    const [isVisibile, setIsVisible] = useState();
    const callbackFunction = (entries) => {
        const [entry] = entries; //const entry = entries[0]
        setIsVisible(entry.isIntersecting);
    };
    const optionsMemo = useMemo(() => {
        return options;
    }, [options]);
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [targetRef, optionsMemo]);
    return isVisibile;
};

export default App;
