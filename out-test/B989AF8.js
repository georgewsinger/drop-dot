goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11492__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11493__i = 0, G__11493__a = new Array(arguments.length -  0);
while (G__11493__i < G__11493__a.length) {G__11493__a[G__11493__i] = arguments[G__11493__i + 0]; ++G__11493__i;}
  args = new cljs.core.IndexedSeq(G__11493__a,0);
} 
return G__11492__delegate.call(this,args);};
G__11492.cljs$lang$maxFixedArity = 0;
G__11492.cljs$lang$applyTo = (function (arglist__11494){
var args = cljs.core.seq(arglist__11494);
return G__11492__delegate(args);
});
G__11492.cljs$core$IFn$_invoke$arity$variadic = G__11492__delegate;
return G__11492;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11495__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11496__i = 0, G__11496__a = new Array(arguments.length -  0);
while (G__11496__i < G__11496__a.length) {G__11496__a[G__11496__i] = arguments[G__11496__i + 0]; ++G__11496__i;}
  args = new cljs.core.IndexedSeq(G__11496__a,0);
} 
return G__11495__delegate.call(this,args);};
G__11495.cljs$lang$maxFixedArity = 0;
G__11495.cljs$lang$applyTo = (function (arglist__11497){
var args = cljs.core.seq(arglist__11497);
return G__11495__delegate(args);
});
G__11495.cljs$core$IFn$_invoke$arity$variadic = G__11495__delegate;
return G__11495;
})()
;

return null;
});
