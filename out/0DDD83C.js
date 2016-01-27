goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__365183__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__365183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__365184__i = 0, G__365184__a = new Array(arguments.length -  0);
while (G__365184__i < G__365184__a.length) {G__365184__a[G__365184__i] = arguments[G__365184__i + 0]; ++G__365184__i;}
  args = new cljs.core.IndexedSeq(G__365184__a,0);
} 
return G__365183__delegate.call(this,args);};
G__365183.cljs$lang$maxFixedArity = 0;
G__365183.cljs$lang$applyTo = (function (arglist__365185){
var args = cljs.core.seq(arglist__365185);
return G__365183__delegate(args);
});
G__365183.cljs$core$IFn$_invoke$arity$variadic = G__365183__delegate;
return G__365183;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__365186__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__365186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__365187__i = 0, G__365187__a = new Array(arguments.length -  0);
while (G__365187__i < G__365187__a.length) {G__365187__a[G__365187__i] = arguments[G__365187__i + 0]; ++G__365187__i;}
  args = new cljs.core.IndexedSeq(G__365187__a,0);
} 
return G__365186__delegate.call(this,args);};
G__365186.cljs$lang$maxFixedArity = 0;
G__365186.cljs$lang$applyTo = (function (arglist__365188){
var args = cljs.core.seq(arglist__365188);
return G__365186__delegate(args);
});
G__365186.cljs$core$IFn$_invoke$arity$variadic = G__365186__delegate;
return G__365186;
})()
;

return null;
});
