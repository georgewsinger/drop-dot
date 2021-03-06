goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__312286__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__312286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__312287__i = 0, G__312287__a = new Array(arguments.length -  0);
while (G__312287__i < G__312287__a.length) {G__312287__a[G__312287__i] = arguments[G__312287__i + 0]; ++G__312287__i;}
  args = new cljs.core.IndexedSeq(G__312287__a,0);
} 
return G__312286__delegate.call(this,args);};
G__312286.cljs$lang$maxFixedArity = 0;
G__312286.cljs$lang$applyTo = (function (arglist__312288){
var args = cljs.core.seq(arglist__312288);
return G__312286__delegate(args);
});
G__312286.cljs$core$IFn$_invoke$arity$variadic = G__312286__delegate;
return G__312286;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__312289__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__312289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__312290__i = 0, G__312290__a = new Array(arguments.length -  0);
while (G__312290__i < G__312290__a.length) {G__312290__a[G__312290__i] = arguments[G__312290__i + 0]; ++G__312290__i;}
  args = new cljs.core.IndexedSeq(G__312290__a,0);
} 
return G__312289__delegate.call(this,args);};
G__312289.cljs$lang$maxFixedArity = 0;
G__312289.cljs$lang$applyTo = (function (arglist__312291){
var args = cljs.core.seq(arglist__312291);
return G__312289__delegate(args);
});
G__312289.cljs$core$IFn$_invoke$arity$variadic = G__312289__delegate;
return G__312289;
})()
;

return null;
});
