goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26423__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26424__i = 0, G__26424__a = new Array(arguments.length -  0);
while (G__26424__i < G__26424__a.length) {G__26424__a[G__26424__i] = arguments[G__26424__i + 0]; ++G__26424__i;}
  args = new cljs.core.IndexedSeq(G__26424__a,0);
} 
return G__26423__delegate.call(this,args);};
G__26423.cljs$lang$maxFixedArity = 0;
G__26423.cljs$lang$applyTo = (function (arglist__26425){
var args = cljs.core.seq(arglist__26425);
return G__26423__delegate(args);
});
G__26423.cljs$core$IFn$_invoke$arity$variadic = G__26423__delegate;
return G__26423;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26426__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26427__i = 0, G__26427__a = new Array(arguments.length -  0);
while (G__26427__i < G__26427__a.length) {G__26427__a[G__26427__i] = arguments[G__26427__i + 0]; ++G__26427__i;}
  args = new cljs.core.IndexedSeq(G__26427__a,0);
} 
return G__26426__delegate.call(this,args);};
G__26426.cljs$lang$maxFixedArity = 0;
G__26426.cljs$lang$applyTo = (function (arglist__26428){
var args = cljs.core.seq(arglist__26428);
return G__26426__delegate(args);
});
G__26426.cljs$core$IFn$_invoke$arity$variadic = G__26426__delegate;
return G__26426;
})()
;

return null;
});
