/***
|''Name:''|UploadPluginLingoFR|
|''Description:''|French Translation|
|''Version:''|4.0.0|
|''Date:''|Mar 2, 2007|
|''Source:''|http://tiddlywiki.bidix.info/#UploadPluginLingoFR|
|''Author:''|BidiX (BidiX (at) bidix (dot) info)|
|''License:''|[[BSD open source license|http://tiddlywiki.bidix.info/#%5B%5BBSD%20open%20source%20license%5D%5D ]]|
|''~CoreVersion:''|2.2.0 (Changeset 1583)|
|''Require:''|[[UploadPlugin V4.0.0|http://tiddlywiki.bidix.info/#PasswordOptionPlugin]]<br>[[UploadService|http://tiddlywiki.bidix.info/#UploadPlugin]]|
***/
//{{{
config.macros.upload.label = {
	promptOption: "Sauvegarde et t�l�charge ce TiddlyWiki avec les UploadOptions",
	promptParamMacro: "Sauvegarde et t�l�charge ce TiddlyWiki vers %0",
	saveLabel: "sauvegarde sur le web", 
	saveToDisk: "sauvegarde sur le disque",
	uploadLabel: "T�l�charge vers le web"	
};

config.macros.upload.messages = {
	noStoreUrl: "Pas de 'store URL' dans les param�tres ou dans les options",
	usernameOrPasswordMissing: "nom d'utilisateur ou mot de passe absent"
};

bidix.upload.messages = {
	//from saving
	invalidFileError: "Le fichier '%0' d'origine ne semble pas �tre un TiddlyWiki valide",
	backupSaved: "backup t�l�charg� vers le web",
	backupFailed: "Echec du t�l�chargement enregistrement du backup",
	rssSaved: "Flux RSS a �t� t�l�charg�",
	rssFailed: "Echec du t�l�chargement du flux RSS",
	emptySaved: "Fichier de base 'empty.html' t�l�charg�",
	emptyFailed: "Echec du t�l�chargement du fichier de base 'empty.html'",
	mainSaved: "Fichier principal TiddlyWiki t�l�charg�",
	mainFailed: "Echec du t�l�chargement du fchier principal TiddlyWiki. Vos modifications n'ont pas �t� t�l�charg�es",
	//specific upload
	loadOriginalHttpPostError: "Le fichier d'origine n'a pas pu �tre acc�d�",
	aboutToSaveOnHttpPost: "Pr�paration du t�l�chargement du TiddlyWiki vers  %0 ...",
	storePhpNotFound: "Le script de t�l�chargement '%0' n'a pas pu �tre trouv�."
};
//}}}