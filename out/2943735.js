goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__95732__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__95732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95733__i = 0, G__95733__a = new Array(arguments.length -  0);
while (G__95733__i < G__95733__a.length) {G__95733__a[G__95733__i] = arguments[G__95733__i + 0]; ++G__95733__i;}
  args = new cljs.core.IndexedSeq(G__95733__a,0);
} 
return G__95732__delegate.call(this,args);};
G__95732.cljs$lang$maxFixedArity = 0;
G__95732.cljs$lang$applyTo = (function (arglist__95734){
var args = cljs.core.seq(arglist__95734);
return G__95732__delegate(args);
});
G__95732.cljs$core$IFn$_invoke$arity$variadic = G__95732__delegate;
return G__95732;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__95735__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__95735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95736__i = 0, G__95736__a = new Array(arguments.length -  0);
while (G__95736__i < G__95736__a.length) {G__95736__a[G__95736__i] = arguments[G__95736__i + 0]; ++G__95736__i;}
  args = new cljs.core.IndexedSeq(G__95736__a,0);
} 
return G__95735__delegate.call(this,args);};
G__95735.cljs$lang$maxFixedArity = 0;
G__95735.cljs$lang$applyTo = (function (arglist__95737){
var args = cljs.core.seq(arglist__95737);
return G__95735__delegate(args);
});
G__95735.cljs$core$IFn$_invoke$arity$variadic = G__95735__delegate;
return G__95735;
})()
;

return null;
});
