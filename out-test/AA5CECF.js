goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13653__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13654__i = 0, G__13654__a = new Array(arguments.length -  0);
while (G__13654__i < G__13654__a.length) {G__13654__a[G__13654__i] = arguments[G__13654__i + 0]; ++G__13654__i;}
  args = new cljs.core.IndexedSeq(G__13654__a,0);
} 
return G__13653__delegate.call(this,args);};
G__13653.cljs$lang$maxFixedArity = 0;
G__13653.cljs$lang$applyTo = (function (arglist__13655){
var args = cljs.core.seq(arglist__13655);
return G__13653__delegate(args);
});
G__13653.cljs$core$IFn$_invoke$arity$variadic = G__13653__delegate;
return G__13653;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13656__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13657__i = 0, G__13657__a = new Array(arguments.length -  0);
while (G__13657__i < G__13657__a.length) {G__13657__a[G__13657__i] = arguments[G__13657__i + 0]; ++G__13657__i;}
  args = new cljs.core.IndexedSeq(G__13657__a,0);
} 
return G__13656__delegate.call(this,args);};
G__13656.cljs$lang$maxFixedArity = 0;
G__13656.cljs$lang$applyTo = (function (arglist__13658){
var args = cljs.core.seq(arglist__13658);
return G__13656__delegate(args);
});
G__13656.cljs$core$IFn$_invoke$arity$variadic = G__13656__delegate;
return G__13656;
})()
;

return null;
});
