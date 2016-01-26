goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__296003__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__296003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__296004__i = 0, G__296004__a = new Array(arguments.length -  0);
while (G__296004__i < G__296004__a.length) {G__296004__a[G__296004__i] = arguments[G__296004__i + 0]; ++G__296004__i;}
  args = new cljs.core.IndexedSeq(G__296004__a,0);
} 
return G__296003__delegate.call(this,args);};
G__296003.cljs$lang$maxFixedArity = 0;
G__296003.cljs$lang$applyTo = (function (arglist__296005){
var args = cljs.core.seq(arglist__296005);
return G__296003__delegate(args);
});
G__296003.cljs$core$IFn$_invoke$arity$variadic = G__296003__delegate;
return G__296003;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__296006__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__296006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__296007__i = 0, G__296007__a = new Array(arguments.length -  0);
while (G__296007__i < G__296007__a.length) {G__296007__a[G__296007__i] = arguments[G__296007__i + 0]; ++G__296007__i;}
  args = new cljs.core.IndexedSeq(G__296007__a,0);
} 
return G__296006__delegate.call(this,args);};
G__296006.cljs$lang$maxFixedArity = 0;
G__296006.cljs$lang$applyTo = (function (arglist__296008){
var args = cljs.core.seq(arglist__296008);
return G__296006__delegate(args);
});
G__296006.cljs$core$IFn$_invoke$arity$variadic = G__296006__delegate;
return G__296006;
})()
;

return null;
});
