goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__162842__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__162842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162843__i = 0, G__162843__a = new Array(arguments.length -  0);
while (G__162843__i < G__162843__a.length) {G__162843__a[G__162843__i] = arguments[G__162843__i + 0]; ++G__162843__i;}
  args = new cljs.core.IndexedSeq(G__162843__a,0);
} 
return G__162842__delegate.call(this,args);};
G__162842.cljs$lang$maxFixedArity = 0;
G__162842.cljs$lang$applyTo = (function (arglist__162844){
var args = cljs.core.seq(arglist__162844);
return G__162842__delegate(args);
});
G__162842.cljs$core$IFn$_invoke$arity$variadic = G__162842__delegate;
return G__162842;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__162845__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__162845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162846__i = 0, G__162846__a = new Array(arguments.length -  0);
while (G__162846__i < G__162846__a.length) {G__162846__a[G__162846__i] = arguments[G__162846__i + 0]; ++G__162846__i;}
  args = new cljs.core.IndexedSeq(G__162846__a,0);
} 
return G__162845__delegate.call(this,args);};
G__162845.cljs$lang$maxFixedArity = 0;
G__162845.cljs$lang$applyTo = (function (arglist__162847){
var args = cljs.core.seq(arglist__162847);
return G__162845__delegate(args);
});
G__162845.cljs$core$IFn$_invoke$arity$variadic = G__162845__delegate;
return G__162845;
})()
;

return null;
});
