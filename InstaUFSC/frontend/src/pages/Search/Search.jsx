import "./Search.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetMessageComponent } from "../../hooks/useResetMessageComponent";
import { useQuery } from "../../hooks/useQuery";

import LikeContainer from "../../components/LikeContainer";
import PhotoItem from "../../components/PhotoItem";
import { NavLink } from "react-router-dom";

import { searchPhotos, like } from "../../slices/photoSlice";

const Search = () => {
  const query = useQuery();
  const search = query.get("q"); //retorna o elemento q da URL

  const dispatch = useDispatch();

  const resetMessage = useResetMessageComponent(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { photos, loading } = useSelector((state) => state.photo);

  //carregamento das fotos a partir da string de busca definida
  useEffect(() => {
    dispatch(searchPhotos(search));
  }, [dispatch, search]); //monitora o dispatch e a variável de search

  //atribuição de likes
  const handleLike = (photo) => {
    dispatch(like(photo._id));

    resetMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="search">
      <h2>Você buscou por: {search}</h2>
      {photos &&
        photos.map((photo) => (
          <div key={photo._id}>
            <PhotoItem photo={photo} />
            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
            <NavLink className="btn" to={`/photos/${photo._id}`}>
              Ver mais
            </NavLink>
          </div>
        ))}
      {photos && photos.length === 0 && (
        <h2 className="no-photos">
          Não foram encontrados resultados para a sua busca.
        </h2>
      )}
    </div>
  );
};

export default Search;
