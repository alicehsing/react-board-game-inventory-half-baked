import { useState } from 'react';
import { createGame } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit

  // here's the state you'll need:
    // title;
    // genre;
    // designer;
    // description;
    // minPlayers;
    // maxPlayers;
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [designer, setDesigner] = useState('');
  const [description, setDescription] = useState('');
  const [minPlayers, setMinPlayers] = useState(0);
  const [maxPlayers, setMaxPlayers] = useState(0);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    // create a game
    await createGame({
      title: title,
      genre: genre,
      designer: designer,
      description: description,
      min_players: minPlayers,
      max_players: maxPlayers
    });

    // use history.push to send the user to the list page
    history.push('/board-games');
  }
  console.log(createGame);
  return (
    <div className='create'>
      {/* on submit, call your handleSubmit function */}
      <form onSubmit={handleSubmit}>
        <h2>Add board game</h2>
        <label>
            Title
          {/* on change, set the title in state */}
          <input value={title} required name='title' onChange={e => setTitle(e.target.value)}/>
        </label>
        <label>
            Genre
          {/* on change, set the genre in state */}
          <select value={genre} required onChange={e => setGenre(e.target.value)}>
            <option>Tile-laying</option>
            <option>Economic</option>
            <option>War</option>
            <option>Card</option>
            <option>Abstract</option>
            <option>Cooperative</option>
            <option>Solo</option>
          </select>
        </label>
        <label>
            Designer
          {/* on change, set the designer in state */}
          <input value={designer} required name='designer' onChange={e => setDesigner(e.target.value)} />
        </label>
        <label>
            Min Players
          {/* on change, set the min players in state */}
          <input value={minPlayers} required name='min_players' onChange={e => setMinPlayers(e.target.value)}/>
        </label>
        <label>
            Max Players
          {/* on change, set the max players in state */}
          <input value={maxPlayers} required name='max_players' onChange={e => setMaxPlayers(e.target.value)}/>
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <textarea value={description} required name='description' onChange={e => setDescription(e.target.value)} />
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}
