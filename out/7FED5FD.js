goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__170229__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__170229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__170230__i = 0, G__170230__a = new Array(arguments.length -  0);
while (G__170230__i < G__170230__a.length) {G__170230__a[G__170230__i] = arguments[G__170230__i + 0]; ++G__170230__i;}
  args = new cljs.core.IndexedSeq(G__170230__a,0);
} 
return G__170229__delegate.call(this,args);};
G__170229.cljs$lang$maxFixedArity = 0;
G__170229.cljs$lang$applyTo = (function (arglist__170231){
var args = cljs.core.seq(arglist__170231);
return G__170229__delegate(args);
});
G__170229.cljs$core$IFn$_invoke$arity$variadic = G__170229__delegate;
return G__170229;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__170232__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__170232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__170233__i = 0, G__170233__a = new Array(arguments.length -  0);
while (G__170233__i < G__170233__a.length) {G__170233__a[G__170233__i] = arguments[G__170233__i + 0]; ++G__170233__i;}
  args = new cljs.core.IndexedSeq(G__170233__a,0);
} 
return G__170232__delegate.call(this,args);};
G__170232.cljs$lang$maxFixedArity = 0;
G__170232.cljs$lang$applyTo = (function (arglist__170234){
var args = cljs.core.seq(arglist__170234);
return G__170232__delegate(args);
});
G__170232.cljs$core$IFn$_invoke$arity$variadic = G__170232__delegate;
return G__170232;
})()
;

return null;
});
