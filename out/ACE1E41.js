goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22022__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22023__i = 0, G__22023__a = new Array(arguments.length -  0);
while (G__22023__i < G__22023__a.length) {G__22023__a[G__22023__i] = arguments[G__22023__i + 0]; ++G__22023__i;}
  args = new cljs.core.IndexedSeq(G__22023__a,0);
} 
return G__22022__delegate.call(this,args);};
G__22022.cljs$lang$maxFixedArity = 0;
G__22022.cljs$lang$applyTo = (function (arglist__22024){
var args = cljs.core.seq(arglist__22024);
return G__22022__delegate(args);
});
G__22022.cljs$core$IFn$_invoke$arity$variadic = G__22022__delegate;
return G__22022;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22025__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22025 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22026__i = 0, G__22026__a = new Array(arguments.length -  0);
while (G__22026__i < G__22026__a.length) {G__22026__a[G__22026__i] = arguments[G__22026__i + 0]; ++G__22026__i;}
  args = new cljs.core.IndexedSeq(G__22026__a,0);
} 
return G__22025__delegate.call(this,args);};
G__22025.cljs$lang$maxFixedArity = 0;
G__22025.cljs$lang$applyTo = (function (arglist__22027){
var args = cljs.core.seq(arglist__22027);
return G__22025__delegate(args);
});
G__22025.cljs$core$IFn$_invoke$arity$variadic = G__22025__delegate;
return G__22025;
})()
;

return null;
});
