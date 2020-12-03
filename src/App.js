import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Challenges from "./Challenges";
import Articles from "./news/Articles";
import Article from "./news/Article";
import CreateArticle from "./news/CreateArticle";

const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/challenges">
                <Challenges />
            </Route>
            <Route exact path="/news">
                <Articles />
            </Route>
            <Route path="/news/create">
                <CreateArticle />
            </Route>
            <Route
                path="/news/:id"
                render={({ match }) => <Article id={match.params.id} />}
            />
        </Switch>
    </Router>
);

export default App;
