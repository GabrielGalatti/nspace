import {
  getDocs,
  collection,
  Firestore,
  doc,
  getDoc,
  query,
  QueryConstraint,
  orderBy,
} from "firebase/firestore";

const useFirebaseQuery = <T,>(collection_name: string, db: Firestore) => {
  const getAllDocuments = async (): Promise<T[] | undefined> => {
    try {
      const firstDocs = query(collection(db, collection_name));
      const doscsQuery = await getDocs(firstDocs);

      const docs = doscsQuery.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));

      return docs as unknown as T[];
    } catch (err) {
      console.log(
        `ERRO AO BUSCAR DOCUMENTOS DE ${collection_name.toUpperCase()}: ${err}`
      );
    }
  };

  const getAllWhere = async (
    constraint: QueryConstraint[],
    oderByField: string
  ): Promise<T[] | undefined> => {
    try {
      const doscsQuery = query(
        collection(db, collection_name),
        orderBy(oderByField, "desc"),
        ...constraint
      );

      const docsGotten = await getDocs(doscsQuery);

      const docs = docsGotten.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));

      return docs as unknown as T[];
    } catch (err) {
      console.log(
        `ERRO AO BUSCAR DOCUMENTOS DE ${collection_name.toUpperCase()}: ${err}`
      );
    }
  };

  const getDocumentById = async (uid: string): Promise<T | undefined> => {
    try {
      const existingDocRef = doc(db, collection_name, uid);
      const existingDoc = await getDoc(existingDocRef);

      if (!existingDoc.exists()) return;

      return { ...existingDoc.data(), id: uid } as unknown as T;
    } catch (err) {
      console.log(
        `ERRO AO BUSCAR DOCUMENTO DE ${collection_name.toUpperCase()}: ${err}`
      );
    }
  };

  return {
    getAllDocuments,
    getDocumentById,
    getAllWhere,
  };
};

export default useFirebaseQuery;
