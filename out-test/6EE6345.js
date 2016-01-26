goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26046__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26046 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26047__i = 0, G__26047__a = new Array(arguments.length -  0);
while (G__26047__i < G__26047__a.length) {G__26047__a[G__26047__i] = arguments[G__26047__i + 0]; ++G__26047__i;}
  args = new cljs.core.IndexedSeq(G__26047__a,0);
} 
return G__26046__delegate.call(this,args);};
G__26046.cljs$lang$maxFixedArity = 0;
G__26046.cljs$lang$applyTo = (function (arglist__26048){
var args = cljs.core.seq(arglist__26048);
return G__26046__delegate(args);
});
G__26046.cljs$core$IFn$_invoke$arity$variadic = G__26046__delegate;
return G__26046;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26049__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26050__i = 0, G__26050__a = new Array(arguments.length -  0);
while (G__26050__i < G__26050__a.length) {G__26050__a[G__26050__i] = arguments[G__26050__i + 0]; ++G__26050__i;}
  args = new cljs.core.IndexedSeq(G__26050__a,0);
} 
return G__26049__delegate.call(this,args);};
G__26049.cljs$lang$maxFixedArity = 0;
G__26049.cljs$lang$applyTo = (function (arglist__26051){
var args = cljs.core.seq(arglist__26051);
return G__26049__delegate(args);
});
G__26049.cljs$core$IFn$_invoke$arity$variadic = G__26049__delegate;
return G__26049;
})()
;

return null;
});
