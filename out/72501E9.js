goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__362018__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__362018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__362019__i = 0, G__362019__a = new Array(arguments.length -  0);
while (G__362019__i < G__362019__a.length) {G__362019__a[G__362019__i] = arguments[G__362019__i + 0]; ++G__362019__i;}
  args = new cljs.core.IndexedSeq(G__362019__a,0);
} 
return G__362018__delegate.call(this,args);};
G__362018.cljs$lang$maxFixedArity = 0;
G__362018.cljs$lang$applyTo = (function (arglist__362020){
var args = cljs.core.seq(arglist__362020);
return G__362018__delegate(args);
});
G__362018.cljs$core$IFn$_invoke$arity$variadic = G__362018__delegate;
return G__362018;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__362021__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__362021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__362022__i = 0, G__362022__a = new Array(arguments.length -  0);
while (G__362022__i < G__362022__a.length) {G__362022__a[G__362022__i] = arguments[G__362022__i + 0]; ++G__362022__i;}
  args = new cljs.core.IndexedSeq(G__362022__a,0);
} 
return G__362021__delegate.call(this,args);};
G__362021.cljs$lang$maxFixedArity = 0;
G__362021.cljs$lang$applyTo = (function (arglist__362023){
var args = cljs.core.seq(arglist__362023);
return G__362021__delegate(args);
});
G__362021.cljs$core$IFn$_invoke$arity$variadic = G__362021__delegate;
return G__362021;
})()
;

return null;
});
