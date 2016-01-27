goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__305983__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__305983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__305984__i = 0, G__305984__a = new Array(arguments.length -  0);
while (G__305984__i < G__305984__a.length) {G__305984__a[G__305984__i] = arguments[G__305984__i + 0]; ++G__305984__i;}
  args = new cljs.core.IndexedSeq(G__305984__a,0);
} 
return G__305983__delegate.call(this,args);};
G__305983.cljs$lang$maxFixedArity = 0;
G__305983.cljs$lang$applyTo = (function (arglist__305985){
var args = cljs.core.seq(arglist__305985);
return G__305983__delegate(args);
});
G__305983.cljs$core$IFn$_invoke$arity$variadic = G__305983__delegate;
return G__305983;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__305986__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__305986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__305987__i = 0, G__305987__a = new Array(arguments.length -  0);
while (G__305987__i < G__305987__a.length) {G__305987__a[G__305987__i] = arguments[G__305987__i + 0]; ++G__305987__i;}
  args = new cljs.core.IndexedSeq(G__305987__a,0);
} 
return G__305986__delegate.call(this,args);};
G__305986.cljs$lang$maxFixedArity = 0;
G__305986.cljs$lang$applyTo = (function (arglist__305988){
var args = cljs.core.seq(arglist__305988);
return G__305986__delegate(args);
});
G__305986.cljs$core$IFn$_invoke$arity$variadic = G__305986__delegate;
return G__305986;
})()
;

return null;
});
