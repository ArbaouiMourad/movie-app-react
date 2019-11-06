import React,{Component}from 'react';
import NameFilter from './component/NameFilter' ;
import RatingFilter from './component/RatingFilter' ;
import MovieList from './component/MovieList';
import  ModalExample from './component/Addmodal';
import WithLoading from './component/WithLoading';
import './App.css'


const inception = {id: 1 ,title: 'Inception', rating: 5, image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg', year: 2010}

const shawshank = {
  id: 2,
    title: 'Shawshank Redeption',
    year: 1994,
    rating: 5,
    image:'https://timesofindia.indiatimes.com/thumb/61997245.cms?width=219&height=317&imgsize=29984'
}
const Whatever={id: 3,title: "Alita: Battle Angel", rating: 4, year: 1900,image:'http://cinecinephile.com/wp-content/uploads/2018/03/Tomb-Raider-2018-Film.jpg'}
const newMovie={id:4,title:'beirut', rating:3 , year:2007 ,image:"https://www.greatplacetowork.ca/templates/gptw/images/no-image-available.jpg"}

const moviesToDisplay = [inception, shawshank,Whatever,newMovie ]

const ListWithLoading = WithLoading(MovieList)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minRatingFilter: 3,
      movies: moviesToDisplay,
      titleFilter: '',
      loading: false
    } }
    componentDidMount = () => {
      this.setState({ loading: true });
  
      setTimeout(() => {
        this.setState({ loading: false });
      }, 3000);
    };
 
  addnewMovie=(title,image, rating)=>{
    console.log(title,image,rating)
    this.setState({
      movies:this.state.movies.concat({title:title,image:image,rating:rating})
    })

  }
 
  getVisibleMovies() {
    return this.state.movies.filter(el => 
      el.rating >= this.state.minRatingFilter &&
    
        el.title.toLowerCase().includes(
          this.state.titleFilter.toLowerCase().trim()
          ) )}
  render() {

  return (

<div className="App">

  <header className="movie-app-header">

  <NameFilter  value={this.state.titleFilter}  onChange={(newtitleFilter) => {
              this.setState({
                titleFilter: newtitleFilter
              })
            }}/>
            
   <RatingFilter count={this.state.minRatingFilter}
            onChange={(newRating) => {
              this.setState({
                minRatingFilter: newRating
              })
            }}/>
  </header>
  <main className="movie-app-main">

    <ListWithLoading isLoading={this.state.loading}  movies={this.getVisibleMovies(moviesToDisplay)} />
  
  <div className="ME">
    <ModalExample  add={this.addnewMovie} />
    </div>
  </main>
  
    </div>
  );
}
}
export default App;

