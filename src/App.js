import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Challenges from "./Challenges";
import Articles from "./news/Articles";
import Article from "./news/Article";
import CreateArticle from "./news/CreateArticle";

const App = () => (
    <Router>
        <Header />
        <Route exact path="/challenges">
            <Challenges />
        </Route>
        <Route exact path="/news">
            <Articles />
        </Route>
        <Route
            exact
            path="/news/:id"
            render={({ match }) => <Article id={match.params.id} />}
        />
        <Route exact path="/news/create">
            <CreateArticle />
        </Route>
    </Router>
);

export default App;
