// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15650__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15650 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15651__i = 0, G__15651__a = new Array(arguments.length -  0);
while (G__15651__i < G__15651__a.length) {G__15651__a[G__15651__i] = arguments[G__15651__i + 0]; ++G__15651__i;}
  args = new cljs.core.IndexedSeq(G__15651__a,0);
} 
return G__15650__delegate.call(this,args);};
G__15650.cljs$lang$maxFixedArity = 0;
G__15650.cljs$lang$applyTo = (function (arglist__15652){
var args = cljs.core.seq(arglist__15652);
return G__15650__delegate(args);
});
G__15650.cljs$core$IFn$_invoke$arity$variadic = G__15650__delegate;
return G__15650;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15653__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15654__i = 0, G__15654__a = new Array(arguments.length -  0);
while (G__15654__i < G__15654__a.length) {G__15654__a[G__15654__i] = arguments[G__15654__i + 0]; ++G__15654__i;}
  args = new cljs.core.IndexedSeq(G__15654__a,0);
} 
return G__15653__delegate.call(this,args);};
G__15653.cljs$lang$maxFixedArity = 0;
G__15653.cljs$lang$applyTo = (function (arglist__15655){
var args = cljs.core.seq(arglist__15655);
return G__15653__delegate(args);
});
G__15653.cljs$core$IFn$_invoke$arity$variadic = G__15653__delegate;
return G__15653;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map