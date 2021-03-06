goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__80581__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__80581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80582__i = 0, G__80582__a = new Array(arguments.length -  0);
while (G__80582__i < G__80582__a.length) {G__80582__a[G__80582__i] = arguments[G__80582__i + 0]; ++G__80582__i;}
  args = new cljs.core.IndexedSeq(G__80582__a,0);
} 
return G__80581__delegate.call(this,args);};
G__80581.cljs$lang$maxFixedArity = 0;
G__80581.cljs$lang$applyTo = (function (arglist__80583){
var args = cljs.core.seq(arglist__80583);
return G__80581__delegate(args);
});
G__80581.cljs$core$IFn$_invoke$arity$variadic = G__80581__delegate;
return G__80581;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__80584__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__80584 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80585__i = 0, G__80585__a = new Array(arguments.length -  0);
while (G__80585__i < G__80585__a.length) {G__80585__a[G__80585__i] = arguments[G__80585__i + 0]; ++G__80585__i;}
  args = new cljs.core.IndexedSeq(G__80585__a,0);
} 
return G__80584__delegate.call(this,args);};
G__80584.cljs$lang$maxFixedArity = 0;
G__80584.cljs$lang$applyTo = (function (arglist__80586){
var args = cljs.core.seq(arglist__80586);
return G__80584__delegate(args);
});
G__80584.cljs$core$IFn$_invoke$arity$variadic = G__80584__delegate;
return G__80584;
})()
;

return null;
});
