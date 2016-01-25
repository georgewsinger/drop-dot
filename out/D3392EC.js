goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53249__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53250__i = 0, G__53250__a = new Array(arguments.length -  0);
while (G__53250__i < G__53250__a.length) {G__53250__a[G__53250__i] = arguments[G__53250__i + 0]; ++G__53250__i;}
  args = new cljs.core.IndexedSeq(G__53250__a,0);
} 
return G__53249__delegate.call(this,args);};
G__53249.cljs$lang$maxFixedArity = 0;
G__53249.cljs$lang$applyTo = (function (arglist__53251){
var args = cljs.core.seq(arglist__53251);
return G__53249__delegate(args);
});
G__53249.cljs$core$IFn$_invoke$arity$variadic = G__53249__delegate;
return G__53249;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53252__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53253__i = 0, G__53253__a = new Array(arguments.length -  0);
while (G__53253__i < G__53253__a.length) {G__53253__a[G__53253__i] = arguments[G__53253__i + 0]; ++G__53253__i;}
  args = new cljs.core.IndexedSeq(G__53253__a,0);
} 
return G__53252__delegate.call(this,args);};
G__53252.cljs$lang$maxFixedArity = 0;
G__53252.cljs$lang$applyTo = (function (arglist__53254){
var args = cljs.core.seq(arglist__53254);
return G__53252__delegate(args);
});
G__53252.cljs$core$IFn$_invoke$arity$variadic = G__53252__delegate;
return G__53252;
})()
;

return null;
});
