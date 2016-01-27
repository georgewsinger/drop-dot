goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__114289__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__114289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__114290__i = 0, G__114290__a = new Array(arguments.length -  0);
while (G__114290__i < G__114290__a.length) {G__114290__a[G__114290__i] = arguments[G__114290__i + 0]; ++G__114290__i;}
  args = new cljs.core.IndexedSeq(G__114290__a,0);
} 
return G__114289__delegate.call(this,args);};
G__114289.cljs$lang$maxFixedArity = 0;
G__114289.cljs$lang$applyTo = (function (arglist__114291){
var args = cljs.core.seq(arglist__114291);
return G__114289__delegate(args);
});
G__114289.cljs$core$IFn$_invoke$arity$variadic = G__114289__delegate;
return G__114289;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__114292__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__114292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__114293__i = 0, G__114293__a = new Array(arguments.length -  0);
while (G__114293__i < G__114293__a.length) {G__114293__a[G__114293__i] = arguments[G__114293__i + 0]; ++G__114293__i;}
  args = new cljs.core.IndexedSeq(G__114293__a,0);
} 
return G__114292__delegate.call(this,args);};
G__114292.cljs$lang$maxFixedArity = 0;
G__114292.cljs$lang$applyTo = (function (arglist__114294){
var args = cljs.core.seq(arglist__114294);
return G__114292__delegate(args);
});
G__114292.cljs$core$IFn$_invoke$arity$variadic = G__114292__delegate;
return G__114292;
})()
;

return null;
});
